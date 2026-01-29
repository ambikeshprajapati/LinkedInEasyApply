const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g;

// 🔧 Replace with your API / n8n webhook
const API_ENDPOINT = "https://yourapi.com";

function addApplyButton(postElement, postText) {
  if (postElement.querySelector(".quick-apply-btn")) return;

  const btn = document.createElement("button");
  btn.innerText = "Apply";
  btn.className = "quick-apply-btn";

  btn.onclick = async () => {
    btn.innerText = "Sending...";
    btn.disabled = true;

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content: postText
        })
      });

      if (!res.ok) throw new Error("API failed");

      btn.innerText = "Sent";
    } catch (e) {
      console.error("Apply error:", e);
      btn.innerText = "Error";
    }

    setTimeout(() => {
      btn.innerText = "Apply";
      btn.disabled = false;
    }, 2500);
  };

  postElement.appendChild(btn);
}

function scanPosts() {
  const posts = document.querySelectorAll("div.feed-shared-update-v2");

  posts.forEach(post => {
    const text = post.innerText;
    if (EMAIL_REGEX.test(text)) {
      addApplyButton(post, text);
    }
  });
}

// LinkedIn is dynamic
const observer = new MutationObserver(scanPosts);
observer.observe(document.body, { childList: true, subtree: true });

// Initial scan
setTimeout(scanPosts, 3000);
