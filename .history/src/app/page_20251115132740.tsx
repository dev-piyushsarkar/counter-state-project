import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nextjs Starter Frontend",
	description: "Production grade Next.js starter template",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="">
				<CardHeader>
					<CardTitle>Basic Counter</CardTitle>
				</CardHeader>
			</Card>
		</section>
	);
};

export default page;
