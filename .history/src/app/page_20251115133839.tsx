import { Button } from "@/components/shadcnui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { PlusCircleIcon } from "lucide-react";
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
				<CardContent>
					<div className="">Count: 0</div>
					<div className="">
						<Button>
							<PlusCircleIcon />
						</Button>
						<Button>-1</Button>
					</div>
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
