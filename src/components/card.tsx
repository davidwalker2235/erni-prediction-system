import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
    CardActionArea,
    CardActions,
    Collapse,
} from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullScreenDialog from "./fullScreenDialog";
import {useEffect, useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const MultiActionAreaCard = (
    {   children,
        text,
        title,
        hasFullScreen,
        hasExpand,
        expandContent,
        isExpanded = false
    }: {
        children: any,
        text: string,
        title: string,
        hasFullScreen?: boolean,
        hasExpand?: boolean,
        expandContent?: any,
        isExpanded?: boolean
    }) => {
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        setExpanded(isExpanded)
    }, [isExpanded])

    const handleOpenFullScreen = () => {
        setIsFullScreen(true);
    };

    const handleCloseFullScreen = () => {
        setIsFullScreen(false);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    {children}
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {hasExpand ? <CardActions style={{justifyContent: "space-between"}}>
                <div style={{display: 'flex', marginLeft: 6}}>
                    <Typography variant="h6">Config:</Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </ExpandMore>
                </div>
                {hasFullScreen ? <IconButton
                    onClick={handleOpenFullScreen}
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{mr: 2}}
                >
                    <FullscreenIcon/>
                </IconButton> : null}
            </CardActions> : null}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {hasExpand && !!expandContent && expandContent()}
                </CardContent>
            </Collapse>
            <FullScreenDialog title={title} isFullScreen={isFullScreen} handleClose={handleCloseFullScreen}>
                {React.cloneElement(children, { hasFullScreen })}
            </FullScreenDialog>
        </Card>
    );
}

export default MultiActionAreaCard;