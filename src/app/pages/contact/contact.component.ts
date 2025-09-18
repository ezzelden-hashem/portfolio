import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SafeHtmlPipe } from '../../utilities/safe-html.pipe';
import { send } from '@emailjs/browser';
import { FooterComponent } from "../home/footer/footer.component";

interface ContactInfo {
  title: string;
  value: string;
  icon: string;
  href?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SafeHtmlPipe, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // EmailJS Configuration - Replace with your actual values
  private readonly emailjsConfig = {
    serviceId: 'service_xbswwke',      // Replace with your EmailJS service ID
    templateId: 'template_alzxemv',    // Replace with your EmailJS template ID
    publicKey: 'n3CAtIMMD18_lm6DO'       // Replace with your EmailJS public key
  };

  contactInfo: ContactInfo[] = [
    {
      title: 'Email Address',
      value: 'ezzelden.hashem@gmail.com',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>`,
      href: 'mailto:ezzelden.hashem@gmail.com'
    },
    {
      title: 'Phone Number',
      value: '+20 112 133 4345',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>`,
      href: 'tel:+201121334345'
    }
  ];;

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    try {
      await send(
        this.emailjsConfig.serviceId,
        this.emailjsConfig.templateId,
        this.contactForm.value,
        this.emailjsConfig.publicKey
      );
      this.showSuccessMessage = true;
      this.contactForm.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      // Optionally, show an error message to the user
    } finally {
      this.isSubmitting = false;
    }
  }

  openContact(contact: ContactInfo): void {
    if (contact.href) {
      window.open(contact.href, '_blank');
    }
  }
}