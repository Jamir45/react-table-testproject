import { format } from "date-fns";
import ColumnsSearch from "./ColumnsSearch";

export const tableColumns = [
  {
    Header: "Country Name",
    accessor: "name",
    Filter: ColumnsSearch,
  },
  {
    Header: "Capital",
    accessor: "capital",
    Filter: ColumnsSearch,
  },
  {
    Header: "Region",
    accessor: "region",
    Filter: ColumnsSearch,
  },
  {
    Header: "Population",
    accessor: "population",
    Filter: ColumnsSearch,
  },
  {
    Header: "Languages",
    accessor: "languages[0].name",
    Filter: ColumnsSearch,
  },
];

export const groupHeader = [
  {
    Header: "Id",
    Footer: "Id",
    columns: [
      {
        Header: "Id",
        Footer: "Id",
        accessor: "id",
        Filter: ColumnsSearch,
        disableFilters: true,
      },
    ],
  },
  {
    Header: "User Name",
    Footer: "User Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
        Filter: ColumnsSearch,
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
        Filter: ColumnsSearch,
      },
    ],
  },
  {
    Header: "User Info",
    Footer: "User Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
        Filter: ColumnsSearch,
      },
      {
        Header: "Gender",
        Footer: "Gender",
        accessor: "gender",
        Filter: ColumnsSearch,
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
        Filter: ColumnsSearch,
      },
    ],
  },
  {
    Header: "Contact",
    Footer: "Contact",
    columns: [
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
        Filter: ColumnsSearch,
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
        Filter: ColumnsSearch,
      },
    ],
  },
];
