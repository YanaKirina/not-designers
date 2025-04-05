import { TestQuery } from '@/components/TestQuery';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Simple DS GQL Generator</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <TestQuery />
        </div>
      </div>
    </div>
  );
}
