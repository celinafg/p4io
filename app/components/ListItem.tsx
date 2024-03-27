import React from "react";
import { Meta } from "../../types";
import Link from "next/link";
import getFormattedDate from "../../lib/getFormattedDate";
import Image from "next/image";
import SVGPhoto from "../../public/images/arrow.svg";
import styles from "../styles/Projects.module.scss";

type Props = {
  project: Meta;
};

export default function ListItem({ project }: Props) {
  const { id, date, title, description, img, company } = project;
  const formattedDate = getFormattedDate(date);

  return (
    <div>
      <li className={`${styles.li} ${styles.griditem}`} key={id}>
        <Link href={`/projects/${id}`}>
          <div className="allCard">
            <div className="card">
              <div className="thumbnail">thumb</div>
              <div className="text">
                <p className="comp"> {company}</p>
                <h2 className="title"> {title}</h2>
                <p className="desc"> {description}</p>
                <div className="arrow">
                  <Image src={SVGPhoto} alt="arrow" width={40} height={40} />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <br />
        {/* <p>{formattedDate}</p> */}
      </li>
    </div>
  );
}
