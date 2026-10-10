import { Component, HostListener, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { CodeChef, CodeForces, GeeksForGeeks, HackerRank, Blogs, Email, Github, Leetcode, LinkedIn, Resume, SphereTags, Projects, Experiences, Skills } from 'src/assets/data/developer_data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mudar Hussain';

  isWindow: boolean = window.innerWidth > 630 ? true : false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isWindow = event.target.innerWidth > 630 ? true : false;
  }

  constructor(private firestore: Firestore) {}

  async ngOnInit() {
    // Add any initialization logic here if needed
    // await setDoc(doc(this.firestore, 'portfolio', 'config'), {
    //   resume: Resume,
    //   linkedin: LinkedIn,
    //   github: Github,
    //   leetcode: Leetcode,
    //   codeforces: CodeForces,
    //   codechef: CodeChef,
    //   hackerrank: HackerRank,
    //   geeksforgeeks: GeeksForGeeks,
    //   blogs: Blogs,
    //   email: Email,
    //   sphereTags: SphereTags
    // });

    // await setDoc(doc(this.firestore, 'portfolio', 'data'), {
    //   skills: Skills,
    //   experiences: Experiences,
    //   projects: Projects
    // });
    // console.log('Data added to Firestore successfully!');

  }
}
