import React, { Suspense } from "react";

const Products = React.lazy(() => import("@/Modules/PageModules/Products"));
export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading please wait...</div>}>
        <Products />
      </Suspense>
    </>
  );
}
