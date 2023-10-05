// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link,
} from "solid-start";

import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>ivialyi/storage</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body class="min-h-screen bg-slate-100 font-[Inter] antialiased">
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
