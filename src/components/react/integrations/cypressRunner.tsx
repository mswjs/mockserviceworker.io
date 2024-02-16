export function CypressRunnerIntegration(): JSX.Element {
  return (
    <div className="border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white rounded-lg overflow-hidden ml-auto">
      <ul className="p-4 border-l-4 border-green-400 dark:border-green-600">
        <li>
          <p className="text-lg font-bold">Product detail page</p>
          <ul className="md:pl-4 py-2 text-neutral-400">
            <li>
              <p>
                <span className="mr-[1ch] text-green-600 font-mono">✔</span>
                <span className="font-medium text-neutral-500 dark:text-neutral-400">
                  Displays product item details
                </span>
              </p>
              <ul className="ml-1 px-4 py-2 border-l border-neutral-400 dark:border-neutral-800">
                <li>
                  <p className="mb-1 uppercase font-medium text-neutral-400 dark:text-neutral-600 text-sm">
                    Test body
                  </p>
                  <table
                    className="dark:bg-neutral-800 dark:bg-opacity-50  font-mono font-medium text-sm w-full"
                    cellPadding={5}
                  >
                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                      <td className="w-[3ch] text-center dark:opacity-50">1</td>
                      <td className="uppercase font-bold text-neutral-600 dark:text-neutral-400">
                        Visit
                      </td>
                      <td className="text-neutral-500 dark:text-neutral-400">
                        /product/abc-123
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                      <td className="w-[3ch] text-center" />
                      <td className="uppercase text-neutral-400 dark:text-neutral-600 italic">
                        (XHR)
                      </td>
                      <td className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                        <span className="inline-block w-2 h-2 bg-green-600 rounded-full" />{' '}
                        GET 200 api.acme/product/abc-123
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-neutral-800 align-top">
                      <td className="w-[3ch] text-center opacity-50">2</td>
                      <td className="uppercase font-bold">
                        <span className="bg-green-800 text-white dark:text-black dark:bg-green-600 rounded-sm px-1">
                          Assert
                        </span>
                      </td>
                      <td className="text-green-600">
                        expected{' '}
                        <span className="text-green-900 dark:text-green-300">
                          h1.title
                        </span>{' '}
                        to have value{' '}
                        <span className="text-green-900 dark:text-green-300">
                          Porcelain Mug
                        </span>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="w-[3ch] text-center opacity-50">3</td>
                      <td className="uppercase font-bold">
                        <span className="bg-green-800 text-white dark:text-black dark:bg-green-600  rounded-sm px-1">
                          Assert
                        </span>
                      </td>
                      <td className="text-green-600">
                        expected{' '}
                        <span className="text-green-900 dark:text-green-300">
                          p.price
                        </span>{' '}
                        to have value{' '}
                        <span className="text-green-900 dark:text-green-300">
                          $9.99
                        </span>
                      </td>
                    </tr>
                  </table>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
