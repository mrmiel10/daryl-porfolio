import React from "react";
import { ComponentPropsWithoutRef } from "react";
export const FlagCmrIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
 
<svg 
    width={props.size}
    height={props.size}
viewBox="0 0 64 64" 
{...props}
  aria-hidden="true" role="img"
//    class="iconify iconify--emojione"
   preserveAspectRatio="xMidYMid meet"><path d="M62 32c0-13.1-8.3-24.2-20-28.3v56.6C53.7 56.2 62 45.1 62 32" fill="#ffce31"></path><path d="M2 32c0 13.1 8.4 24.2 20 28.3V3.7C10.4 7.8 2 18.9 2 32z" fill="#83bf4f"></path><path d="M42 3.7C38.9 2.6 35.5 2 32 2s-6.9.6-10 1.7v56.6c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7V3.7z" fill="#c94747"></path><path fill="#ffce31" d="M32 36.2l5.3 3.8l-2-6.1l5.2-3.8H34L32 24l-2 6.1h-6.5l5.2 3.8l-2 6.1z"></path>
</svg>
  );
};
