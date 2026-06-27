"use client";

import { useState } from "react";

interface Props {
  domain: string;
  nameEn: string;
}

export function LogoImage({ domain, nameEn }: Props) {
  const [failed, setFailed] = useState(false);
  const initial = nameEn.charAt(0).toUpperCase();

  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/90">
      {failed ? (
        <span className="font-display text-base font-bold text-ink">{initial}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
          alt={nameEn}
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
