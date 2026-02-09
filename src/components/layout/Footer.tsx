import { Container } from './Container';
import { SITE_NAME } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12 mt-32">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Brand Identity */}
          <div className="text-center md:text-left">
            <p className="text-sm text-text-primary font-medium mb-1">
              {SITE_NAME}
            </p>
            <p className="text-xs text-text-secondary max-w-md">
              Built by people who've done the work. We use AI the same way we
              use fixtures and probes: carefully, deliberately, and for the job
              it's meant to do.
            </p>
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-text-secondary">
              © {new Date().getFullYear()} {SITE_NAME}. Keep decisions moving.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
