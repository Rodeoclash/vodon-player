import * as React from 'react';
import { RowButtonProps } from '../RowButton';
interface DMCheckboxItemProps {
    checked: boolean;
    disabled?: boolean;
    onCheckedChange: (isChecked: boolean) => void;
    children: React.ReactNode;
    variant?: RowButtonProps['variant'];
    kbd?: string;
    id?: string;
    ariaLabel?: string;
}
export declare function DMCheckboxItem({ checked, disabled, variant, onCheckedChange, kbd, id, ariaLabel, children, }: DMCheckboxItemProps): JSX.Element;
export {};
//# sourceMappingURL=DMCheckboxItem.d.ts.map