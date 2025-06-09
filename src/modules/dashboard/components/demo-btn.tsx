import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const DemoButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="h-11 px-8">
                    Watch Demo
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0">
                <div className="aspect-video">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/5bId3N7QZec?autoplay=1"
                        title="CodeQuest Demo - How Programmers Overprepare for Job Interviews"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        frameBorder={0}
                        className="rounded-lg"
                    ></iframe>
                </div>
            </DialogContent>
        </Dialog>
    );
};
