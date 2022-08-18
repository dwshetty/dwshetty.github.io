import Meta from "components/Meta";
import { Fragment } from "react";
import styles from "./styles.module.scss";

interface Client {
  name: string;
  url: string;
}

interface Professional {
  clients: Client[];
  designations: string[];
  durations: string[];
  location: string;
  name: string;
}

type ProfessionalNameLocation = Pick<Professional, "location" | "name">;

interface ProfessionalDesignationDuration {
  designation: string;
  duration: string;
}

interface Internships
  extends ProfessionalNameLocation,
    ProfessionalDesignationDuration {}

function NameLocation({ location, name }: ProfessionalNameLocation) {
  return (
    <div>
      <span className={styles.nameWrapper}>
        <i className="far fa-building" />
        <strong>{name}</strong>
      </span>
      <span className={styles.locationWrapper}>
        <i className="fas fa-map-marker" />
        <span>{location}</span>
      </span>
    </div>
  );
}

function DesignationDuration({
  designation,
  duration
}: ProfessionalDesignationDuration) {
  return (
    <li className={styles.arrow}>
      <span>
        <i className="fas fa-level-up-alt" />
      </span>
      <span>
        <span>{designation}</span>
        <br />
        <span>({duration})</span>
      </span>
    </li>
  );
}

function Work(): JSX.Element {
  const professionals: Professional[] = [
    {
      clients: [{ name: "Accenture", url: "https://www.accenture.com/in-en" }],
      designations: ["Application Development Senior Analyst"],
      durations: ["Dec '21 - Present"],
      location: "Mumbai, Maharashtra, India",
      name: "Accenture Solutions Private Limited"
    },
    {
      clients: [
        { name: "Mahindra & Mahindra", url: "https://www.mahindrasyouv.com/" },
        {
          name: "Bajaj Finserv Health Limited",
          url: "https://www.bajajfinservhealth.in/"
        }
      ],
      designations: ["Software Professional"],
      durations: ["Mar '20 - Dec '21"],
      location: "Pune, Maharashtra, India",
      name: "Extentia Information Technology"
    },
    {
      clients: [
        { name: "American International Group", url: "https://www.aig.com/" }
      ],
      designations: ["Associate Consultant", "Senior Software Engineer"],
      durations: ["Oct '18 - Feb '20", "Aug '17 - Sep '18"],
      location: "Pune, Maharashtra, India",
      name: "Capgemini"
    }
  ];

  const internships: Internships[] = [
    {
      designation: "Software Engineering Intern",
      duration: "May 2016 - Jul 2016",
      location: "Pune, Maharashtra, India",
      name: "Amdocs"
    },
    {
      designation: "Internship Trainee",
      duration: "May 2015 - Jul 2015",
      location: "Verna, Goa, India",
      name: "Siemens"
    },
    {
      designation: "Intern",
      duration: "Jun 2014 - Jul 2014",
      location: "Corlim, Goa, India",
      name: "Syngenta India Ltd"
    }
  ];

  return (
    <>
      <Meta
        suffixTitle="Work"
        pageDescription="Here is where you can find work/career details of Dwitesh Shetty"
      />
      <section className={styles.wrapper}>
        <h1>Work Experience</h1>
        <br />
        <h2>Professional</h2>
        <div>
          {professionals.map((professional, index) => (
            <div key={`${index + 1}`} className={styles.card}>
              <NameLocation
                location={professional.location}
                name={professional.name}
              />
              <ul>
                {professional.designations.map((designation, childIndex) => (
                  <DesignationDuration
                    key={`${childIndex + 1}`}
                    designation={designation}
                    duration={professional.durations[childIndex]}
                  />
                ))}
              </ul>
              <br />
              <hr />
              <br />
              <div className={styles.clientWrapper}>
                <strong>Clients: </strong>
                <span>
                  {professional.clients.map((client, childIndex, array) => (
                    <Fragment key={client.url}>
                      <a
                        href={client.url}
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                      >
                        {client.name}
                      </a>
                      {childIndex !== array.length - 1 && <span>,&nbsp;</span>}
                    </Fragment>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <h2>Internships</h2>
        <div>
          {internships.map((internship, index) => (
            <div key={`${index + 1}`} className={styles.card}>
              <NameLocation
                location={internship.location}
                name={internship.name}
              />
              <ul>
                <DesignationDuration
                  designation={internship.designation}
                  duration={internship.duration}
                />
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Work;
