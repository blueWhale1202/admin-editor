import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { executingAtom } from "@/modules/code-editor/atom/result/execution";
import { activeTabAtom } from "@/modules/code-editor/atom/tab";
import { Results } from "@/modules/code-editor/components/results";
import { Testcase } from "@/modules/code-editor/components/testcase";
import { useAtom, useAtomValue } from "jotai";
import { FlaskConical, Loader2, Terminal } from "lucide-react";
import { TestCaseTab } from "../types";

export const TestCaseArea = () => {
    const [activeTab, setActiveTab] = useAtom(activeTabAtom);
    const isRunning = useAtomValue(executingAtom);

    if (isRunning) {
        return (
            <div className="flex h-full flex-col overflow-hidden">
                <div className="bg-border flex h-full flex-col items-center justify-center gap-2 rounded-md border">
                    <Loader2 className="text-muted-foreground size-8 animate-spin" />
                    <p className="text-muted-foreground text-sm">Running...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full flex-col overflow-hidden">
            <Tabs
                value={activeTab}
                onValueChange={(value) => setActiveTab(value as TestCaseTab)}
                className="bg-border flex h-full flex-col rounded-md border"
            >
                <div className="bg-accent flex h-10 items-center justify-between rounded-t-md border-b px-2">
                    <TabsList>
                        <TabsTrigger value="testcase">
                            <FlaskConical className="text-amber-500" />
                            Testcase
                        </TabsTrigger>
                        <Separator
                            orientation="vertical"
                            className="mx-1 !h-4/5"
                        />
                        <TabsTrigger value="result">
                            <Terminal className="text-green-500" />
                            Test Result
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent
                    value="testcase"
                    className="flex-1 overflow-hidden"
                >
                    <Testcase />
                </TabsContent>

                <TabsContent value="result" className="flex-1 overflow-hidden">
                    <Results />
                </TabsContent>
            </Tabs>
        </div>
    );
};
