export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  /** Marks an entry as a fill-in template rather than a real endorsement. */
  placeholder?: boolean;
};

/**
 * Endorsements from supervisors, collaborators, and mentees.
 *
 * The entries below are clearly marked placeholders so nothing fabricated is
 * presented as a genuine recommendation. Replace each one with a real quote and
 * attribution (or delete the array to hide the section entirely).
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I have had the pleasure of supervising Hridoy Ahmed during his graduate research in molecular genetics and disease genomics. He consistently demonstrated exceptional intellectual curiosity, technical competence, and scientific integrity. His ability to integrate wet-lab molecular biology techniques with advanced bioinformatics analyses is uncommon among early-career researchers. Hridoy approaches research problems with maturity and independence, whether working on genetic variant interpretation, computational drug discovery, or translational genomics. He is meticulous in data analysis, rigorous in scientific reasoning, and highly committed to producing research of publishable quality. His achievements, including first-author publications in reputable international journals, reflect both his dedication and his potential to become an outstanding scientist. I strongly recommend Hridoy for advanced research opportunities, doctoral training, and collaborative scientific projects.",
    name: "Prof. Dr. Laila Khaleda",
    title: "Principal Investigator, FGPL, University of Chittagong",
    placeholder: true,
  },
  {
    quote:
      "Working with Hridoy Ahmed has been an exceptionally rewarding experience. As a collaborator, he brings a rare combination of biological insight, computational expertise, and strong project management skills. During our research collaborations, he consistently contributed innovative ideas, performed rigorous analyses, and ensured that every stage of the project met high scientific standards. What distinguishes Hridoy is his ability to bridge disciplines. He can move seamlessly from molecular biology concepts to bioinformatics workflows, making him a valuable contributor in interdisciplinary research teams. Beyond his technical strengths, he is highly professional, dependable, and always willing to support colleagues. I would gladly collaborate with him again and confidently recommend him to any research group seeking a motivated and capable scientist.",
    name: "Gagandeep Singh Khurana",
    title: "Co-author / Collaborator, India",
    placeholder: true,
  },
  {
    quote:
      "I had the opportunity to learn under Hridoy Ahmed through BioPC, and his mentorship played a significant role in shaping my research journey. He has a remarkable ability to explain complex concepts in genetics, bioinformatics, and computational biology in a way that is both accessible and inspiring. Beyond teaching technical skills, Hridoy encourages critical thinking, scientific curiosity, and confidence in independent research. His mentorship extends far beyond the classroom; he genuinely invests in the growth and success of his students. Through his guidance, I gained practical research experience and developed the skills necessary to pursue advanced studies in life sciences. Hridoy is not only an accomplished researcher but also an outstanding mentor who empowers the next generation of scientists.",
    name: "Mustak Khandokar",
    title: "BioPC Trainee",
    placeholder: true,
  },
];
