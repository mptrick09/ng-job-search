import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

import { HttpClient } from '@angular/common/http';


import { Detail } from './model/detail';



@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, FormsModule, AppComponent, RouterModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {


  currentId: number;
  model: Detail;
  job = {
    description: `
<div class="section page-centered" data-qa="job-description">
    <div>Subspace is an early stage, venture backed startup, pioneering the next generation of decentralized technologies, envisioning a future where AI seamlessly integrates with Web3, redefining digital identities and payments.</div>
    <div></div>
    <div><b>The Subspace Network: </b>The Subspace Network, set to launch its mainnet early next year, is a groundbreaking, radically decentralized layer-one blockchain underpinned by an innovative proof-of-archival storage (PoAS) consensus mechanism. Our work is rooted in original research, supported by the US National Science Foundation. For more insights into our vision and technology, please visit our website and explore the technical whitepaper. This technology serves as the foundation for reimagining the relationship between humans and AI, driving the emergence of a new digital era.</div>
    <div></div>
    <div><b>Our Vision:</b> Our vision extends beyond traditional blockchain paradigms. We are reimagining the user experience of Web3, envisioning a world where every individual interacts with the internet through AI-driven agents effortlessly, handling complex tasks from identity verification to payment execution. At the core of our mission lies Humaic Intelligence (HI) and Humaic Labs, pioneering a human-centric approach to AI, championing collaboration, and ensuring universal access.</div>
    <h2><b>Your Role</b></h2>
    <div>As the Head of Product at Subspace Labs, you will play a pivotal role in bringing this vision to reality through leading and owning the end-to-end product development, strategy, and adoption of Subspace as the world’s autonomous identity and payment network, built to connect every human and AI on the planet. Reporting directly to our Chief Technology Officer and collaborating closely with our visionary Founder Jeremiah Wagstaff, you will be at the forefront of our product development efforts. You will lead and mentor a team of 10+ engineers, designers, and product managers, fostering a collaborative environment that thrives on creativity and innovation.</div>
</div>
<div class="section page-centered">
    <div>
        <h2>Responsibilities:</h2>
        <ul>
            <li><b>Translate Vision into Reality:</b> Partner closely with the CEO and CTO to translate our product vision into actionable requirements, technical specifications, and robust implementation plans that align with our overall strategy.</li>
            <li><b>Product Roadmap Ownership: </b>Develop and own our product roadmap, ensuring alignment with budget, timeline, and resource constraints, while staying responsive to evolving user needs.</li>
            <li><b>Team Leadership: </b>Lead, manage, and nurture a dynamic product team comprising over 10 engineers, designers, and product managers.</li>
            <li><b>Experiment-Driven Decision-Making: </b>hypotheses and experiment-driven product management, making sure decisions are based on data, gut feeling/ user feedback, while ensuring alignment among stakeholders and product managers.</li>
            <li><b>Lean Roadmapping:</b> Drive agile roadmap with flexible OKRs, remaining adaptable to accommodate iterative adjustments, ensuring responsiveness to evolving market dynamics and user feedback.</li>
            <li><b>Cross-Functional Collaboration:</b> Work closely with cross-functional teams within the organization, including engineering, operations, community, and marketing, to prioritize and plan product development efforts.</li>
            <li><b>Community Engagement:</b> Foster open product development by collaborating with product champions across the organization and community, gathering insights into user needs and pain points.</li>
        </ul>
        <h2>Key Requirements</h2>
    </div>
</div>
<div class="section page-centered">
    <ul>
        <li><b>3-5 years of Web3 and AI Product Management:</b> Extensive experience in product management within the Web3 and AI spaces, preferably within startup or decentralized environments.</li>
        <li><b>Blockchain Expertise:</b> In-depth knowledge of blockchain technology, particularly in the application layer, with a focus on developer- and user-facing products and services.</li>
        <li><b>Lean Product Roadmap Lifecycle Management: </b>Proven track record in managing the end-to-end product development life cycle in a fast-paced, iterative startup environment.</li>
        <li><b>User Research and Testing: </b> Familiarity with user research and testing methodologies.</li>
    </ul>
</div>
<div class="section page-centered">
    <div>
        <h2>Bonus Experience</h2>
        <ul>
            <li><b>Blockchain and AI Specific KPIs:</b> Skill in identifying and tracking key performance indicators (KPIs) specific to blockchain and AI applications.</li>
            <li><b>Smart Contract Development: </b>Prior experience in smart contract development and decentralized applications (dApps).</li>
            <li><b>Project Management Proficiency: </b>Ability to manage multiple projects concurrently, balancing quality and productivity under pressure, utilizing various project management methodologies.</li>
        </ul>
    </div>
</div>
<div class="section page-centered px" data-qa="closing-description">
    <h2><b>To apply</b></h2>
    <div>We believe in seeing your skills in action. In addition to your resume, please provide a sample of your work that demonstrates your expertise in blockchain, cryptocurrency, or related fields. This could be a whitepaper, a project proposal, a case study, or any other relevant work that showcases your abilities.</div>
</div>
`
  };







  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  http = inject(HttpClient);



  ngOnInit(): void {
    this.getJobDetail();
  }

  getJobDetail() {
    this.activatedRoute.params.subscribe(params => {
      this.currentId = params['id'];
      const path = 'jobs/' + this.currentId;

      this.http.get<Detail>(path).subscribe(detail => {
        this.model = detail;
        console.log(detail);
      }
      );
    });



  }
  back() {
    this.router.navigateByUrl('job-component');
  }
}