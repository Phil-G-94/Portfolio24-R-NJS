export default function Skills() {
    return (
        <article>
            <h2 className="text-center">Skills</h2>
            <div className="flex flex-row">
                <svg>
                    <use href="/img/skillsSprites.svg#js"></use>
                </svg>

                <svg>
                    <use href="/img/skillsSprites.svg#react"></use>
                </svg>

                <svg>
                    <use href="/img/skillsSprites.svg#mongodb"></use>
                </svg>

                <svg>
                    <use href="/img/skillsSprites.svg#node"></use>
                </svg>

                <svg>
                    <use href="/img/skillsSprites.svg#express"></use>
                </svg>
            </div>
        </article>
    );
}
