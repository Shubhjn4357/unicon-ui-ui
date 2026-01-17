"use client"

import { getComponentBySlug, getAllComponentSlugs } from "@/data/component-docs"
import { DocumentationPage } from "@/components/docs/documentation-page"
import { notFound } from "next/navigation"

interface ComponentPageProps {
    params: {
        slug: string
    }
}

export default async function ComponentPage(props: ComponentPageProps) {
    const params = props.params
    const component = getComponentBySlug(params.slug)

    if (!component) {
        notFound()
    }

    const { data } = component

    // Convert preview functions to ReactNodes
    const examples = data.examples.map((example: any) => ({
        ...example,
        preview: example.preview?.(),
    }))

    return <DocumentationPage {...data} examples={examples} />
}
