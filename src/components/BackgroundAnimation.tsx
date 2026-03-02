"use client";

/**
 * BackgroundAnimation — Pure CSS animated gradient mesh.
 * Uses only transform & opacity (GPU-compositable properties).
 * Renders fewer, smaller blobs on mobile for performance.
 */
export default function BackgroundAnimation() {
    return (
        <div className="bg-animation" aria-hidden="true">
            {/* Primary gradient blob */}
            <div className="bg-blob bg-blob-1" />
            {/* Secondary gradient blob */}
            <div className="bg-blob bg-blob-2" />
            {/* Tertiary accent blob */}
            <div className="bg-blob bg-blob-3" />
            {/* Subtle dot overlay */}
            <div className="bg-dots" />
        </div>
    );
}
