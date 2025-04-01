import { Button } from '@/components/ui/button';

export default function GetInTouch() {
  return (
    <div className="h-[292px] bg-primary rounded-lg z-10 relative px-24 grid grid-cols-2 items-center text-white">
      <div className="space-y-6">
        <h2 className="text-4xl font-medium max-w-[268px]">Let’s talk about your project</h2>
        <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
      </div>
      <div className="flex justify-end items-center">
        <Button>Get in touch</Button>
      </div>
    </div>
  );
}
