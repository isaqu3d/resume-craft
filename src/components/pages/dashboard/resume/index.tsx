"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/ui/resizable";
import { User } from "next-auth";
import { useParams } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

import { InfosSidebar } from "./infos-sidebar";
import { ResumeContent } from "./resume-content";
import { StructureSidebar } from "./structure-sidebar";

type ResumePageProps = {
  title: string;
  initialData: Partial<ResumeData>;
  user?: User;
};

export function ResumePage({ title, initialData, user }: ResumePageProps) {
  const params = useParams();

  const resumeId = params.id as string;

  const defaultValues: ResumeData = {
    content: {
      summary: "<p></p>",
      image: {
        url: user?.image ?? "",
        visible: true,
      },
      infos: {
        email: user?.email ?? "",
        fullName: user?.name ?? "",
        headline: "",
        location: "",
        phone: "",
        website: "",
      },
      certifications: [],
      educations: [],
      experiences: [],
      languages: [],
      projects: [],
      skills: [],
      socialMedias: [],
    },
    structure: {
      template: "ditto",
      colorTheme: "slate",
      language: "portuguese",
      layout: {
        mainSections: [
          { key: "socialMedias" },
          { key: "summary" },
          { key: "experiences" },
          { key: "educations" },
          { key: "certifications" },
          { key: "projects" },
        ],
        sidebarSections: [{ key: "languages" }, { key: "skills" }],
      },
    },
  };

  const methods = useForm<ResumeData>({ defaultValues });

  return (
    <FormProvider {...methods}>
      <main className="w-full h-screen overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="w-full h-full">
          <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
            <InfosSidebar />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel>
            <ResumeContent />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
            <StructureSidebar />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </FormProvider>
  );
}
