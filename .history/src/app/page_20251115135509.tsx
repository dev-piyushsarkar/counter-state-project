import { Button } from "@/components/shadcnui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { MinusCircle, PlusCircleIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nextjs Starter Frontend",
	description: "Production grade Next.js starter template",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-2xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Basic Counter
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="text-center text-xl">
						Count: <span className="font-bold">0</span>
					</div>
					<div className="grid items-center gap-0">
						<Button variant={"destructive"}>
							<MinusCircle /> Minus 1
						</Button>
						<Button>
							<PlusCircleIcon /> Plus 1
						</Button>
					</div>
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
