import * as React from 'react';
import { Renderer } from 'amis';

export interface BulkActionsProps {

}

const BulkActions: React.SFC<BulkActionsProps> = (props) => {

    console.log(props);

    return (
        <div>
            <button>批量删除</button>
        </div>
    );
}


const BulkActionsRender = Renderer({
    test: /(^|\/)bulkActions$/,
    name: "bulkActions"
})(BulkActions)
export default BulkActionsRender;