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
          <DialogTitle className="mb-4">Settings</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Label htmlFor="image-generation">
            <div>DALL-E Placeholder Image Generation</div>
            <div className="font-light mt-2">
              More fun with it but if you want to save money, turn it off.
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
            <div>AI Guoguo API key</div>
            <div className="font-light mt-2 leading-relaxed">
              Only stored in your browser. Never stored on servers. Overrides
              your .env config. 
              <p>You can purchase the key at <a className="underline" href="https://plati.market/itm/3999910" target="_blank">ChatGPT4.0 API KEY</a> or concat <a className="underline" href="https://t.me/aichat199" target="_blank">@aiguoguo</a></p>
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
            <div>Editor Theme</div>
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
          <DialogClose>Save</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SettingsDialog;
