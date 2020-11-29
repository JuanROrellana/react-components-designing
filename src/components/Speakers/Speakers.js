import React, {useContext, useState} from 'react';
import SpeakerContext from "./SpeakerContext";
import SpeakerSearchBar from "../SpeakerSearchBar/SpeakerSearchBar";
import Speaker from '../Speaker/Speaker';

export default function Speakers()  {
    const speakers = useContext(SpeakerContext);

    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div>
            <SpeakerSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
                {speakers
                    .filter((rec) => {
                        const targetString = `${rec.firstName} ${rec.lastName}`.toLowerCase();
                        return searchQuery.length === 0
                            ? true
                            : targetString.includes(searchQuery.toLowerCase());
                    })
                    .map((speaker) => (
                        <Speaker key={speaker.id} {...speaker} />
                    ))}
            </div>
        </div>
    )
}
