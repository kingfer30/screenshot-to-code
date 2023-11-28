export function OnboardingNote() {
  return (
    <div className="flex flex-col space-y-4 bg-green-700 p-2 rounded text-stone-200 text-sm">
      <span>
      要使用 Screenshot to Code, 您需要具有GPT4-vision的权限的API Key{" "}
        <p><a
          href="https://shop.aichat199.com/"
          className="inline underline hover:opacity-70"
          target="_blank"
        >
        点此获取API Key
        </a></p>{" "}
        然后将其粘贴到"设置"对话框中(上面的齿轮图标).
      </span>
      <span>
        您的密钥仅存储在您的浏览器中, 从未存储在我们的服务器上
      </span>
    </div>
  );
}
