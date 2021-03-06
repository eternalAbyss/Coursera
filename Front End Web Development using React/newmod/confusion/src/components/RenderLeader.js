import React from 'react';
import {Media} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function RenderLeader({leader}) {
        return (
            <div className="mt-2">
                <Media className="m-4">
                    <Media left>
                        <Media className="mr-5">
                            <img src={baseUrl + leader.image} alt="Leader Image"/>
                        </Media>
                    </Media>
                    <Media body>
                        <Media heading>
                            {leader.name}
                        </Media>
                        <p>
                            {leader.designation}
                        </p>
                        <p>
                            {leader.description}
                        </p>
                    </Media>
                </Media>
            </div>
        );
}

export default RenderLeader;