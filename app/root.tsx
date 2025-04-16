import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import "./tailwind.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Component() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <ScrollRestoration />
        <Scripts />
        <div className="shrink-0">
          <Header />
        </div>
        <div className="flex flex-1 bg-black">
          <Outlet />
        </div>
        <div className="shrink-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Scripts />
        <div className="w-full flex flex-row justify-center items-center">
          <div className="font-bold text-2xl text-red-500">
            <div>
              Error 404
            </div>
            <div>
              Page Not Found
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
