import React from "react";
import { Meta } from "../../types";
import Link from "next/link";
import getFormattedDate from "../../lib/getFormattedDate";

type Props = {
  project: Meta;
};

export default function ListItem({ project }: Props) {
  const { id, title, date } = project;
  const formattedDate = getFormattedDate(date);
  return (
    <div>
      {" "}
      <li>
        <Link href={`/projects/${id}`}>{title}</Link>
        <br />
        <p>{formattedDate}</p>
      </li>
    </div>
  );
}
