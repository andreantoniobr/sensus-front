import { Link } from "react-router";
import { HiOutlineChevronRight } from "react-icons/hi2";

interface BreadcrumbProps {
  pageTitle: string;
}

const PageBreadcrumb: React.FC<BreadcrumbProps> = ({ pageTitle }) => {
  return (
    <div className="flex flex-wrap flex-col gap-3 mb-6">
      <h2
        className="text-theme-xl font-bold text-gray-800 dark:text-white/90"
        x-text="pageName"
      >
        {pageTitle}
      </h2>
      <nav>
        <ol className="flex items-center gap-1.5">
          <li>
            <Link
              className="inline-flex items-center gap-1.5 text-sm text-custom-blue-100 dark:text-gray-400"
              to="/"
            >
              Home
              <HiOutlineChevronRight className="stroke-current" size={16}/>
            </Link>
          </li>
          <li className="text-sm text-gray-800 dark:text-white/90">
            {pageTitle}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumb;
