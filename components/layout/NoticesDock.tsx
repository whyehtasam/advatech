"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Calendar, ChevronRight, FileText, Inbox } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getLatestNotices, type NoticeItem } from "@/data/notices";
import { cn } from "@/lib/utils";

/** Match /notices page date format */
function formatNoticeDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}


export function NoticesDock() {
  const [open, setOpen] = useState(false);
  const latestNotices = getLatestNotices(5);

  return (
    <>
      {/* Premium floating dock — hidden when dialog is open to avoid overlap */}
      <div
        className={cn(
          "fixed z-[60]",
          "bottom-20 right-4 sm:right-6",
          "lg:bottom-6 lg:right-6",
          "transition-opacity duration-200 ease-out",
          open && "pointer-events-none opacity-0"
        )}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open notices"
          className={cn(
            "relative flex h-14 w-14 items-center justify-center rounded-full",
            "bg-primary text-primary-foreground",
            "shadow-[0_8px_24px_rgba(14,122,230,0.35)]",
            "border border-white/20",
            "transition-all duration-300 ease-out",
            "hover:scale-105 hover:shadow-[0_12px_32px_rgba(14,122,230,0.4)]",
            "active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
        >
          {/* Notification ping — refined */}
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground/40 opacity-80 duration-1000" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-background bg-accent" />
          </span>
          <Bell className="h-5 w-5 notices-dock-bell" strokeWidth={2} />
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={true}
          className={cn(
            "fixed w-[calc(100vw-2rem)] max-w-[400px] p-0 gap-0 overflow-hidden",
            "bottom-24 right-4 left-[auto] top-[auto] translate-x-0 translate-y-0 sm:right-6",
            "lg:bottom-24 lg:right-6",
            "rounded-xl border border-border/50",
            "bg-card/95 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] backdrop-blur-sm",
            "origin-bottom-right",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "duration-300 ease-out"
          )}
        >
          <DialogHeader className="border-b border-border/40 px-4 pr-12 py-3.5 sm:px-5 sm:pr-12 sm:py-4">
            <DialogTitle className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-foreground sm:text-[15px]">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-8 sm:w-8">
                <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
              </span>
              <span className="min-w-0 truncate">Notices</span>
            </DialogTitle>
            <p className="mt-1 text-xs font-normal text-muted-foreground sm:mt-1.5">
              Latest updates and announcements
            </p>
          </DialogHeader>

          <div
            className={cn(
              "max-h-[min(60vh,360px)] overflow-y-auto overscroll-contain pt-1",
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            )}
          >
            {latestNotices.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-3 px-4 py-12 text-center sm:px-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/80">
                  <Inbox className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">No notices yet</p>
                <p className="text-xs text-muted-foreground max-w-[200px]">
                  New updates will appear here.
                </p>
              </div>
            ) : (
              <ul className="divide-y divide-border/40">
                {latestNotices.map((notice: NoticeItem) => (
                  <li
                    key={notice.id}
                    className="block px-4 py-3 sm:px-5 sm:py-3.5"
                  >
                    <p className="text-sm font-medium leading-snug text-foreground line-clamp-2">
                      {notice.title}
                    </p>
                    {notice.description && (
                      <p className="mt-1 hidden !text-xs ml-1 text-muted-foreground line-clamp-2 leading-relaxed sm:block">
                        {notice.description}
                      </p>
                    )}
                    <div className="mt-1.5 ml-1 flex items-center gap-2">
                      <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] shadow-sm font-medium text-muted-foreground capitalize">
                        {notice.category}
                      </span>
                      <time
                        className="flex items-center gap-1 text-[11px] text-muted-foreground tabular-nums"
                        dateTime={notice.date}
                      >
                        <Calendar className="h-3 w-3 shrink-0" />
                        {formatNoticeDate(notice.date)}
                      </time>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-border/40 bg-muted/20 px-4 py-3 sm:px-5">
            <Link
              href="/notices"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium text-primary",
                "transition-colors hover:bg-primary/10 hover:text-primary"
              )}
            >
              View all notices
              <ChevronRight className="h-4 w-4 shrink-0" strokeWidth={2} />
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
