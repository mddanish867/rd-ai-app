export default function Datasets() {
  const datasets = [
    { id: 1, name: 'COVID-19 Open Research Dataset', size: '19 GB', files: 63, downloads: 15000 },
    { id: 2, name: 'ImageNet', size: '150 GB', files: 14197122, downloads: 200000 },
    { id: 3, name: 'Wikipedia Dump', size: '87 GB', files: 1, downloads: 50000 },
    { id: 4, name: 'Human Genome Project Data', size: '200 GB', files: 23, downloads: 75000 },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Datasets</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Table for larger devices */}
        <div className="hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Size</th>
                <th className="text-left py-2">Files</th>
                <th className="text-left py-2">Downloads</th>
                <th className="text-left py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {datasets.map((dataset) => (
                <tr key={dataset.id} className="border-b last:border-b-0">
                  <td className="py-4">{dataset.name}</td>
                  <td className="py-4">{dataset.size}</td>
                  <td className="py-4">{dataset.files.toLocaleString()}</td>
                  <td className="py-4">{dataset.downloads.toLocaleString()}</td>
                  <td className="py-4">
                    <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card layout for small devices */}
        <div className="md:hidden space-y-4">
          {datasets.map((dataset) => (
            <div key={dataset.id} className="border rounded-lg p-4 shadow">
              <h3 className="font-semibold">{dataset.name}</h3>
              <p><strong>Size:</strong> {dataset.size}</p>
              <p><strong>Files:</strong> {dataset.files.toLocaleString()}</p>
              <p><strong>Downloads:</strong> {dataset.downloads.toLocaleString()}</p>
              <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
