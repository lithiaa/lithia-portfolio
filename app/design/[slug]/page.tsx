import type { Metadata } from "next";
import { DesignPreviewPage } from "@/components/design-preview";
import { designPreviews } from "@/lib/design-previews";

type DesignRouteProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return designPreviews.map((design) => ({ slug: design.slug }));
}

export function generateMetadata({ params }: DesignRouteProps): Metadata {
  const design = designPreviews.find((item) => item.slug === params.slug);

  return {
    title: design ? `${design.name} | Design preview` : "Design preview",
    description: design?.description,
  };
}

export default function DesignRoutePage({ params }: DesignRouteProps) {
  const design = designPreviews.find((item) => item.slug === params.slug);

  if (!design) {
    return null;
  }

  return <DesignPreviewPage design={design} />;
}
