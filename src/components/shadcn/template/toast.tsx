"use client";

import { Button } from "@/components/shadcn/ui/button";
import { ToastAction } from "@/components/shadcn/ui/toast";
import { useToast } from "@/components/shadcn/ui/use-toast";

export function ToastWithAction() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      Show Toast
    </Button>
  );
}
