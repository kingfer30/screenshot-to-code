import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaCog } from "react-icons/fa";
import { EditorTheme, Settings } from "../types";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select } from "./ui/select";

interface Props {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
}

function SettingsDialog({ settings, setSettings }: Props) {
  const handleThemeChange = (theme: EditorTheme) => {
    setSettings((s) => ({
      ...s,
      editorTheme: theme,
    }));
  };

  return (
    <Dialog>
      <DialogTrigger>
        <FaCog />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">设置</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Label htmlFor="image-generation">
            <div>DALL-E 占位符图像生成</div>
            <div className="font-light mt-2">
              它更有趣，但如果你想省钱，就关掉它。
            </div>
          </Label>
          <Switch
            id="image-generation"
            checked={settings.isImageGenerationEnabled}
            onCheckedChange={() =>
              setSettings((s) => ({
                ...s,
                isImageGenerationEnabled: !s.isImageGenerationEnabled,
              }))
            }
          />
        </div>
        <div className="flex flex-col space-y-4">
          <Label htmlFor="openai-api-key">
            <div>果果API key</div>
            <div className="font-light mt-2 leading-relaxed">
                仅存储在您的浏览器中，并不会存储在服务器上。 
              <p>您可以在此购买API Keys <a className="underline" href="https://shop.aichat199.com/" target="_blank">ChatGPT4.0 API KEY</a> 或者QQ联系我 <a className="underline" href="https://t.me/aichat199https://wpa.qq.com/msgrd?v=3&uin=3513494459&site=qqq&menu=yes" target="_blank">@3513494459</a></p>
            </div>
          </Label>

          <Input
            id="openai-api-key"
            placeholder="AI Guoguo API key"
            value={settings.openAiApiKey || ""}
            onChange={(e) =>
              setSettings((s) => ({
                ...s,
                openAiApiKey: e.target.value,
              }))
            }
          />

          

          <Label htmlFor="editor-theme">
            <div>更改主题</div>
          </Label>
          <div>
            <Select // Use the custom Select component here
              id="editor-theme"
              value={settings.editorTheme}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleThemeChange(e.target.value as EditorTheme)
              }
            >
              <option value="cobalt">Cobalt</option>
              <option value="espresso">Espresso</option>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <DialogClose>保存</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SettingsDialog;
