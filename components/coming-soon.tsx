"use client";

import { ArrowLeft, RocketLaunch } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function ComingSoon(): React.JSX.Element {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <RocketLaunch size={128} className="mb-8 text-primary" />
      <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center px-4">
        I am working hard to bring you something amazing. Stay tuned!
      </p>
      <Button
        variant="outline"
        onClick={handleGoBack}
        aria-label="Go back"
        className="mt-8"
      >
        <ArrowLeft size={24} className="mr-2" />
        Go Back
      </Button>
    </div>
  );
}
