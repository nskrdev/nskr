"use client";

import { MessageCircleIcon } from "lucide-react";

import { useIsClient } from "@/hooks/use-is-client";
import { decodePhoneNumber, formatPhoneNumber } from "@/utils/string";

import { IntroItem } from "./intro-item";

export function PhoneItem({ phoneNumber }: { phoneNumber: string }) {
  const isClient = useIsClient();

  return (
    <IntroItem
      icon={MessageCircleIcon}
      content={
        isClient ? `wa.me/+919573784888` : "[WhatsApp protected]"
      }
      href={isClient ? `https://wa.me/919573784888` : "#"}
    />
  );
}
