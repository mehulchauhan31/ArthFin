import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-knowledge-hub',
  standalone: true,
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './knowledge-hub.component.html',
  styleUrl: './knowledge-hub.component.css'
})
export class KnowledgeHubComponent {
  readonly panelOpenState = signal(false);
}
