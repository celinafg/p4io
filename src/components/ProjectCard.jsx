import Link from "next/link";
import Image from "next/image";
import SVGPhoto from "../../public/images/arrow.svg";

const ProjectCard = ({ imgurl, description, title, link, comp }) => {
  return (
    <Link href={link}>
      <div>
        <div className="card">
          <div className="thumbnail"></div>
          <div className="text">
            <p className="comp"> {comp}</p>
            <h2 className="title"> {title}</h2>
            <p className="desc"> {description}</p>
            <div className="arrow">
              <Image src={SVGPhoto} alt="arrow" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
