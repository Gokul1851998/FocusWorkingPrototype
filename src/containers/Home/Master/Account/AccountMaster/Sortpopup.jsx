import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel'
import { useTheme } from '../../../../../config/themeContext';
import { Stack, Typography } from '@mui/material';
import { TableBackTrack } from '../../../../../components/Tables/TableBackTrack';
import SaveIcon from '@mui/icons-material/Save';
import CheckIcon from '@mui/icons-material/Check';
import CheckBox1 from '../../../../../components/CheckBox/CheckBox1';
import { TableSort } from '../../../../../components/Tables/TableSort';

export default function Sortpopup({ onClose }) {
    const { currentTheme } = useTheme();



    return (
        <>
            <Dialog
                open={true}
                onClose={onClose}
                maxWidth="lg"
                fullWidth
                sx={{
                    '& .MuiDialog-paper': {
                        width: '70vw', // Set your desired width here (e.g., '80vw' for 80% of the viewport width or '600px' for a fixed width)
                        maxWidth: 'none',
                        height: "70vh",
                        overflowY: "auto",
                        scrollbarWidth: "thin"
                    },
                }}
            >
                <Box sx={{ minWidth: 600 }}>
                    <DialogTitle sx={{ color: '#85B3D1', display:'flex', justifyContent:'space-between' }}>
                        Sorting
                        <Box sx={{display:'flex'}}>
                        <IconButton
                            onClick={onClose}
                            aria-label="Save"
                            sx={{ fontSize: "0.8rem", padding: "0.5rem",  right: 12, top: 8 }}
                        >
                            <Stack direction="column" alignItems="center">
                                <SaveIcon style={{ color: currentTheme.actionIcons }} />
                                <Typography
                                    variant="caption"
                                    align="center"
                                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                                >
                                    Save
                                </Typography>
                            </Stack>
                        </IconButton>
                        <IconButton
                            onClick={onClose}
                            aria-label="Ok"
                            sx={{ fontSize: "0.8rem", padding: "0.5rem", right: 8, top: 8 }}
                        >
                            <Stack direction="column" alignItems="center">
                                <CheckIcon style={{ color: currentTheme.actionIcons }} />
                                <Typography
                                    variant="caption"
                                    align="center"
                                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                                >
                                    Ok
                                </Typography>
                            </Stack>
                        </IconButton>
                        <IconButton
                            onClick={onClose}
                            aria-label="Close"
                            sx={{ fontSize: "0.8rem", padding: "0.5rem", right: 8, top: 8, }}
                        >
                            <Stack direction="column" alignItems="center">
                                <CancelIcon style={{ color: currentTheme.actionIcons, }} />
                                <Typography
                                    variant="caption"
                                    align="center"
                                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                                >
                                    Cancel
                                </Typography>
                            </Stack>
                        </IconButton>
                        </Box>
                        
                    </DialogTitle>
                    <DialogContent>
                        <TableSort/>
                    </DialogContent>
                </Box>
            </Dialog>
        </>
    );
}


