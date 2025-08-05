import { useState } from "react";
import {
  ArrowDownToLine,
  ChevronDown,
  EllipsisVertical,
  Eraser,
  Highlighter,
  Maximize2,
  Menu,
  Minus,
  Plus,
  Search,
} from "lucide-react";

import "./style/Toolbar.css";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Input } from "./components/ui/input";

interface ToolbarProps {
  setPdfScaleValue: (value: number) => void;
  toggleHighlightPen: () => void;
}

const Toolbar = ({ setPdfScaleValue, toggleHighlightPen }: ToolbarProps) => {
  const [zoom, setZoom] = useState<number | null>(null);
  const [isHighlightPen, setIsHighlightPen] = useState<boolean>(false);

  const zoomIn = () => {
    if (zoom) {
      if (zoom < 4) {
        setPdfScaleValue(zoom + 0.1);
        setZoom(zoom + 0.1);
      }
    } else {
      setPdfScaleValue(1);
      setZoom(1);
    }
  };

  const zoomOut = () => {
    if (zoom) {
      if (zoom > 0.2) {
        setPdfScaleValue(zoom - 0.1);
        setZoom(zoom - 0.1);
      }
    } else {
      setPdfScaleValue(1);
      setZoom(1);
    }
  };

  return (
    // <div className="Toolbar">
    //   <div className="ZoomControls">
    //     <button title="Zoom in" onClick={zoomIn}>
    //       +
    //     </button>
    //     <button title="Zoom out" onClick={zoomOut}>
    //       -
    //     </button>
    //     {zoom ? `${(zoom * 100).toFixed(0)}%` : "Auto"}
    //   </div>
    //   <button
    //     title="Highlight"
    //     className={`HighlightButton ${isHighlightPen ? "active" : ""}`}
    //     onClick={() => {
    //       toggleHighlightPen();
    //       setIsHighlightPen(!isHighlightPen);
    //     }}
    //   >
    //     Toggle Highlights
    //   </button>
    // </div>
    <div className=" px-1 py-1 border-b bg-neutral-700 rounded-xs flex flex-row text-neutral-200">
      <div className="w-full flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center space-x-3 text-sm">
          <div
            className="toolbar-button"
            aria-label="Toggle sidebar"
            // onClick={toggleSidebar}
          >
            <Menu className="size-4" />
          </div>
          <div className="flex gap-1 items-center justify-center">
            <Input className="w-12 h-fit py-0.5 rounded-xs px-2 text-sm border-0 bg-neutral-600 " />
            <span>/ 1234</span>
          </div>
          <div className="toolbar-button">
            <Search className="size-4" />
          </div>
        </div>
        {/* Center section */}

        <div className="flex items-center space-x-1 text-sm h-5">
          <div className="rounded-xs hover:bg-neutral-500 aspect-square p-1.5">
            <Plus className="size-4 aspect-square" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="toolbar-button"
                aria-label="zoom"
                variant="ghost"
                asChild
              >
                <div>
                  {100}%
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="animate-none">
              <DropdownMenuItem>Fit Page</DropdownMenuItem>
              <DropdownMenuItem>Fit Width</DropdownMenuItem>
              <DropdownMenuItem>100%</DropdownMenuItem>
              <DropdownMenuItem>150%</DropdownMenuItem>
              <DropdownMenuItem>200%</DropdownMenuItem>
              <DropdownMenuItem>250%</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="toolbar-button">
            <Minus className="size-4" />
          </div>

          <Separator orientation="vertical" className="mx-3 bg-foreground " />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="toolbar-button"
                aria-label="zoom"
                variant="ghost"
              >
                <Highlighter className="size-4" />
                Highlight
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Fit Page</DropdownMenuItem>
              <DropdownMenuItem>Fit Width</DropdownMenuItem>
              <DropdownMenuItem>100%</DropdownMenuItem>
              <DropdownMenuItem>150%</DropdownMenuItem>
              <DropdownMenuItem>200%</DropdownMenuItem>
              <DropdownMenuItem>250%</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="toolbar-button" aria-label="zoom" variant="ghost">
            <Eraser className="size-4" />
            Erase
          </Button>
        </div>
        {/* Right section */}

        <div className="flex items-center space-x-1 text-sm h-5">
          <div className="toolbar-button">
            <ArrowDownToLine className="size-4" />
          </div>
          <div className="toolbar-button">
            <Maximize2 className="size-4" />
          </div>
          <div className="toolbar-button">
            <EllipsisVertical className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
