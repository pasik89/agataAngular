import { Component, Input } from '@angular/core';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { INavigationItem } from 'src/app/shared/models/navigation-config.interface';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() navigation: string = "";
  navigationItems: INavigationItem[] = [
    {
      label: "Home",
      path: 'mical',
      url: "/home"
    },
    {
      label: "About",
      path: '',
      url: "/home"
    },
    {
      label: "Furnitures",
      path: '',
      url: "/furnitures"
    },
    {
      label: "Testimonial",
      path: '',
      url: "/testimonial"
    },
    {
      label: "Contact Us",
      path: '',
      url: "/contact-us"
    },
    {
      label: "Login/Register",
      path: '',
      url: "/login/register",
      icon: faUser as IconProp
    }
  ];

}
