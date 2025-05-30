import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
  } from "../ui/table";
  import { FaCheckCircle, FaTimesCircle, FaPauseCircle, FaClock, FaCheck } from "react-icons/fa";
  import { BiStore } from "react-icons/bi"; // Icon for Store Operations
  
  interface StoreOperationItem {
    id: number;
    task: string;
    completed: number;
    failed: number;
    ignored: number;
    pending: number;
    confirmed: number;
  }
  
  const storeOperationData: StoreOperationItem[] = [
    {
      id: 1,
      task: "Inventory Audit - Section A",
      completed: 95,
      failed: 2,
      ignored: 1,
      pending: 2,
      confirmed: 100,
    },
    {
      id: 2,
      task: "Shelf Restocking - Aisle 3",
      completed: 100,
      failed: 0,
      ignored: 0,
      pending: 0,
      confirmed: 100,
    },
    {
      id: 3,
      task: "Price Tag Verification",
      completed: 88,
      failed: 5,
      ignored: 0,
      pending: 7,
      confirmed: 100,
    },
    {
      id: 4,
      task: "Promotional Display Setup",
      completed: 100,
      failed: 0,
      ignored: 0,
      pending: 0,
      confirmed: 100,
    },
    {
      id: 5,
      task: "Customer Order Fulfillment",
      completed: 75,
      failed: 3,
      ignored: 2,
      pending: 20,
      confirmed: 100,
    },
  ];
  
  export default function StoreOperationsStatus() {
    return (
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              <BiStore className="w-6 h-6 inline-block mr-2 text-blue-500" /> Store Operations Status
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Real-time tracking of store tasks
            </p>
          </div>
  
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
              <svg
                className="stroke-current fill-white dark:fill-gray-800"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.29004 5.90393H17.7067"
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.7075 14.0961H2.29085"
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                  fill=""
                  stroke=""
                  strokeWidth="1.5"
                />
                <path
                  d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                  fill=""
                  stroke=""
                  strokeWidth="1.5"
                />
              </svg>
              Filter
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
              View All Tasks
            </button>
          </div>
        </div>
        <div className="max-w-full overflow-x-auto">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
              <TableRow>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Task
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                >
                  <FaCheckCircle className="w-5 h-5 inline-block mr-1 text-green-500" />
                  Completed
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                >
                  <FaTimesCircle className="w-5 h-5 inline-block mr-1 text-red-500" />
                  Failed
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                >
                  <FaPauseCircle className="w-5 h-5 inline-block mr-1 text-gray-400 dark:text-gray-500" />
                  Ignored
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                >
                  <FaClock className="w-5 h-5 inline-block mr-1 text-yellow-500" />
                  Pending
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                >
                  <FaCheck className="w-5 h-5 inline-block mr-1 text-blue-500" />
                  Confirmed
                </TableCell>
              </TableRow>
            </TableHeader>
  
            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
              {storeOperationData.map((item) => (
                <TableRow key={item.id} className="">
                  <TableCell className="py-3 font-medium text-gray-800 text-start text-theme-sm dark:text-white/90">
                    {item.task}
                  </TableCell>
                  <TableCell className="py-3 text-gray-600 text-center text-theme-sm dark:text-gray-400">
                    {item.completed}
                  </TableCell>
                  <TableCell className="py-3 text-red-500 text-center text-theme-sm dark:text-red-400">
                    {item.failed}
                  </TableCell>
                  <TableCell className="py-3 text-gray-400 text-center text-theme-sm dark:text-gray-500">
                    {item.ignored}
                  </TableCell>
                  <TableCell className="py-3 text-yellow-500 text-center text-theme-sm dark:text-yellow-400">
                    {item.pending}
                  </TableCell>
                  <TableCell className="py-3 text-blue-500 text-center text-theme-sm dark:text-blue-400">
                    {item.confirmed}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }