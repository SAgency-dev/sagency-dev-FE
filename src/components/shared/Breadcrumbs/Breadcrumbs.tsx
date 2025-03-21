import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { breadCrumbsMap } from "../../../utils/helpers/breadCrumbsMap";
import "./Breadcrumbs.scss";

type BreadcrumbsProps = {
  articleName?: string;
};

const Breadcrumbs = ({ articleName }: BreadcrumbsProps) => {
  const location = useLocation();
  const [crumbsToShow, setCrumbsToShow] = useState<string[]>([]);
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    const rawCrumbs = location.pathname.split("/").filter((el) => el.length > 0);
    const withRoot = ["/", ...rawCrumbs]; 
    const labelCrumbs: string[] = [];

    const builtPaths: string[] = [];
    let currentPath = "";

    withRoot.forEach((crumb) => {
      if (crumb === "/") {
        currentPath = "/";
      } else {
        currentPath += currentPath.endsWith("/") ? crumb : `/${crumb}`;
      }

      builtPaths.push(currentPath);

      const label =
        typeof breadCrumbsMap[crumb] === "string"
          ? (breadCrumbsMap[crumb] as string)
          : crumb;

      labelCrumbs.push(label);
    });

    if (articleName) {
      labelCrumbs.push(articleName);
      builtPaths.push(location.pathname); 
    }

    setCrumbsToShow(labelCrumbs);
    setPaths(builtPaths);
  }, [location.pathname, articleName]);

  return (
    <div className="breadcrumbs">
      {crumbsToShow.map((crumb, index) => {
        const isLast = index === crumbsToShow.length - 1;
        return isLast ? (
          <span key={index} className="breadcrumbs__link--last">
            {crumb}
          </span>
        ) : (
          <span key={index} className="breadcrumbs__crumb">
            <Link className="breadcrumbs__link" to={paths[index]}>{crumb}</Link>
            <span className="breadcrumbs__divider">{" "} /</span>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
