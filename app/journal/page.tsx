import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dog House — The Journal',
}

export default function JournalPage() {
  return (
    <div className="journal-wrap">
      <div className="journal-title">The Journal</div>
      <div className="journal-pill">
        <span className="announce-dot" />
        Coming Soon
      </div>
      <p className="journal-sub">
        Stories from the pack — drops, behind-the-scenes, and notes from the gym and the course.
        Coming soon.
      </p>
    </div>
  )
}
