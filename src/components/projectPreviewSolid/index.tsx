import './style.css';

import GithubIcon from '../icons/GithubIcon';
import Modal from '../modal';

export interface Props {
	title: string;
	description: string;
	wip: boolean;
	date: string;
	githubLink?: string;
	rework: boolean;
	webPageLink?: string;
}

export default function ProjectPreview(props: Props) {
	const links = {
		repo: props.githubLink,
		web: props.webPageLink,
	};
	return (
		<Modal title={props.title} links={links}>
			<div aria-label={`project ${props.title}`} class="project-container">
				<div class="date-title-container">
					<div class="project-title-container">
						<h2>{props.title}</h2>
						{props.wip ? <span>(WIP)</span> : null}
						{props.rework ? <span>(Rework)</span> : null}
					</div>
					<span class="date">{props.date}</span>
				</div>
				<p class="description">{props.description}</p>
			</div>
		</Modal>
	);
}
