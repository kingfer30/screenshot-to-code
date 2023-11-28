import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Input } from "./ui/input";
import toast from "react-hot-toast";
import { PICO_BACKEND_FORM_SECRET } from "../config";

const TermsOfServiceDialog: React.FC<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
}> = ({ open, onOpenChange }) => {
  const [email, setEmail] = React.useState("");

  const onSubscribe = async () => {
    return true
    await fetch("https://backend.buildpicoapps.com/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, secret: PICO_BACKEND_FORM_SECRET }),
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-2">
            输入您的邮箱以继续使用
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div className="mb-2">
          <Input
            placeholder="邮箱"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center space-x-2">
          <span>
            通过提供您的电子邮件，即表示您同意接收不定期的产品更新，并且您接受{" "}
            <a
              href="https://a.picoapps.xyz/camera-write"
              target="_blank"
              className="underline"
            >
              服务条款
            </a>
            . <br />
            <br />
          </span>
        </div>

        <AlertDialogFooter>
          <AlertDialogAction
            onClick={(e) => {
              if (!email.trim() || !email.trim().includes("@")) {
                e.preventDefault();
                toast.error("请输入邮箱");
              } else {
                onSubscribe();
              }
            }}
          >
            同意
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TermsOfServiceDialog;
